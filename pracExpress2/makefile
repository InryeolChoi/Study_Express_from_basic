all : build up

build :
	docker-compose build

up :
	docker-compose up -d

stop:
	docker-compose stop

down : stop
	docker-compose down

logs :
	docker-compose logs -f

clean: down
	@docker image prune
	@docker system prune -f
	@docker volume prune -f
	@docker builder prune -f
	@docker rmi -f $$(docker images -a -q) || true

delete: clean
	@docker buildx prune -f
	@docker network prune -f

re: down start

.PHONY: build up down logs clean delete re