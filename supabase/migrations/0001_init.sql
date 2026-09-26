-- Bosnia Trip: core schema (phase 0)
-- Never store invented location facts here — coordinates/descriptions are
-- filled in only from verified sources during seeding.

create type season as enum ('spring', 'summer', 'autumn', 'winter');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table categories (
  id serial primary key,
  slug text unique not null,
  name text not null
);

create table locations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  city text,
  region text,
  description text,
  latitude double precision,
  longitude double precision,
  hero_image_url text,
  created_at timestamptz not null default now()
);

create table location_categories (
  location_id uuid references locations(id) on delete cascade,
  category_id int references categories(id) on delete cascade,
  primary key (location_id, category_id)
);

create table location_seasons (
  location_id uuid references locations(id) on delete cascade,
  season season not null,
  primary key (location_id, season)
);

create table saved_places (
  user_id uuid references profiles(id) on delete cascade,
  location_id uuid references locations(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, location_id)
);

create table visited_places (
  user_id uuid references profiles(id) on delete cascade,
  location_id uuid references locations(id) on delete cascade,
  visited_at timestamptz not null default now(),
  primary key (user_id, location_id)
);

create table badges (
  id serial primary key,
  slug text unique not null,
  name text not null,
  description text,
  icon text
);

create table user_badges (
  user_id uuid references profiles(id) on delete cascade,
  badge_id int references badges(id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, badge_id)
);

create table trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  name text not null,
  start_date date,
  end_date date,
  created_at timestamptz not null default now()
);

create table trip_days (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips(id) on delete cascade,
  day_number int not null
);

create table trip_locations (
  id uuid primary key default gen_random_uuid(),
  trip_day_id uuid references trip_days(id) on delete cascade,
  location_id uuid references locations(id) on delete cascade,
  order_index int not null default 0
);

-- RLS: users only touch their own rows; locations/categories/badges are public read.
alter table profiles enable row level security;
alter table saved_places enable row level security;
alter table visited_places enable row level security;
alter table user_badges enable row level security;
alter table trips enable row level security;
alter table trip_days enable row level security;
alter table trip_locations enable row level security;

create policy "own profile" on profiles for all using (auth.uid() = id);
create policy "own saved" on saved_places for all using (auth.uid() = user_id);
create policy "own visited" on visited_places for all using (auth.uid() = user_id);
create policy "own badges" on user_badges for all using (auth.uid() = user_id);
create policy "own trips" on trips for all using (auth.uid() = user_id);
create policy "own trip days" on trip_days for all using (
  auth.uid() = (select user_id from trips where trips.id = trip_id)
);
create policy "own trip locations" on trip_locations for all using (
  auth.uid() = (select t.user_id from trips t
    join trip_days d on d.trip_id = t.id where d.id = trip_day_id)
);

alter table locations enable row level security;
alter table categories enable row level security;
alter table badges enable row level security;
create policy "public read locations" on locations for select using (true);
create policy "public read categories" on categories for select using (true);
create policy "public read badges" on badges for select using (true);
