# cv

## What is it?

It's a basic react app to generate static html/css/js for a CV.

It has no server-side components and so can be served statically.

## What to do first?

Have node 7+ and yarn installed. then `yarn install`

## When developing

    yarn start

## How is it deployed?

See the `/about` page.

## How is the release package built?

Build the distributable files:

    yarn build

Then make it available using github releases:

    tar -C build/ -czvf ${RELEASE_VERSION}.tgz .

Then upload to github releases as bin attachment matching the release version (manually via UI right now).

## Associated repos

To build the servers:
https://github.com/sadams/cv-tf

To deploy this application to the web servers:
https://github.com/sadams/cv-ansible
