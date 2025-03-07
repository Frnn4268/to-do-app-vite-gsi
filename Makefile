.PHONY: run-client-react
# Start the React client in development mode
run-client-react:
    @echo "Starting React client..."
    npm run dev

.PHONY: compose-build
# Build services defined in docker-compose.yml
compose-build:
    docker compose -f docker-compose.yml build

.PHONY: compose-up
# Start services defined in docker-compose.yml
compose-up:
    docker compose -f docker-compose.yml up

.PHONY: compose-up-build
# Build and start services defined in docker-compose.yml
compose-up-build:
    docker compose -f docker-compose.yml up --build

.PHONY: compose-down
# Stop and remove services defined in docker-compose.yml
compose-down:
    docker compose -f docker-compose.yml down
