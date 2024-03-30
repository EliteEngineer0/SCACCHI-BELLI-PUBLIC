# Scacchi Belli's public repository

A nuxt app built with vue and tailwind front-end, and with nitro unjs on the backend. The database is handled by prisma
therefore it supports most databases, however the project is intended for postgresql. 

# Build

It's important to have all the enviroment variables setup.

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
