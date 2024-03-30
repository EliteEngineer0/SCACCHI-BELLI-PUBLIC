# Scacchi Belli's public repository

A nuxt app built with vue and tailwind front-end, and with nitro unjs on the backend. The database is handled by prisma
therefore it supports most databases if setup correctly, however the project is intended for postgresql.
Authentication is done with JWT tokens. Passwords are hashed.

# Build

It's important to have all the enviroment variables setup to make it work.
```
  TOKEN_SECRET = "..."
  TOKEN_NAME = "..."
  TOKEN_EXPIRES = "..."
  DATABASE_URL = "[...]://postgres:[...]@[...]:5432/[...]"
```

## Install the packages
```
  pnpm i
```

## Build prisma
```
  pnpm prisma generate
  pnpm prisma db push
```

### Finally...

## For development
```
  pnpm run dev
```

## For deployment/production
```
  pnpm run build
```
### You can also locally preview the production build
```
  pnpm run preview
```
