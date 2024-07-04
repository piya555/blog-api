#!/bin/bash

# Wait for MongoDB to be ready
echo "Waiting for MongoDB to be ready..."
until mongo --host mongo --eval "print(\"waited for connection\")"
do
    sleep 1
done

# Run the seed script
echo "Running seed script..."
node dist/seed.js

echo "Seeding completed."