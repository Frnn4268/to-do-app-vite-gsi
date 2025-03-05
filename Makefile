.PHONY: run-client-react
run-client-react:
	@echo "Starting React client..."
	npm run dev

.PHONY: compose-build
compose-build:
	docker compose -f docker-compose.yml build

.PHONY: compose-up
compose-up:
	docker compose -f docker-compose.yml up

.PHONY: compose-up-build
compose-up-build:
	docker compose -f docker-compose.yml up --build

.PHONY: compose-down
compose-down:
	docker compose -f docker-compose.yml down
