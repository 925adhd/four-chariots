-- Enable RLS on public.waitlist and allow anon INSERT only.
-- The anon key is embedded in notify.js (by design — it's a public key),
-- so RLS is what actually protects the table. Without this, anyone could
-- SELECT * and walk away with every collected email.

alter table public.waitlist enable row level security;

drop policy if exists "anon can insert waitlist" on public.waitlist;

create policy "anon can insert waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);
