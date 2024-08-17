APP_NAME=my-express-app
DOCKER_COMPOSE=docker-compose

build:
	@docker build -t $(APP_NAME) .

up:
	@$(DOCKER_COMPOSE) up -d --build

down:
	@$(DOCKER_COMPOSE) down

start:
	@$(DOCKER_COMPOSE) up -d

stop:
	@$(DOCKER_COMPOSE) stop

logs:
	@$(DOCKER_COMPOSE) logs -f

restart:
	@$(DOCKER_COMPOSE) restart

clean:
	@docker system prune -f
	@docker volume prune -f

test:
	@$(DOCKER_COMPOSE) run --rm app npm test