APP_NAME=prac

all: start

start:
	@docker build -t $(APP_NAME) .
	@docker-compose up -d

down:
	@docker-compose down

clean: down
	@docker image prune
	@docker system prune -f
	@docker volume prune -f
	@docker builder prune -f
	@docker rmi -f $$(docker images -a -q) || true

delete: clean
	@docker buildx prune -f