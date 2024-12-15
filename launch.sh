#!/bin/bash

# Define the directory containing the AppImage files
APPIMAGE_DIR="./app/backend/target/release/bundle/appimage"

# Ensure the directory exists
if [[ ! -d "$APPIMAGE_DIR" ]]; then
    echo "Directory $APPIMAGE_DIR does not exist. Exiting."
    exit 1
fi

# Find the latest AppImage file based on semantic versioning
latest_file=$(ls "$APPIMAGE_DIR"/*.AppImage 2>/dev/null | sort -V | tail -n 1)

# Check if an AppImage file was found
if [[ -z "$latest_file" ]]; then
    echo "No AppImage files found in $APPIMAGE_DIR. Exiting."
    exit 1
fi

# Make the latest file executable (just in case it isn't already)
chmod +x "$latest_file"

# Run the latest AppImage file
echo "Running latest AppImage: $latest_file"
"$latest_file"

