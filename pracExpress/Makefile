APP_NAME=prac

all: check start

check:
	@if [ ! -f ./data/database.db ]; then \
		echo "데이터베이스를 설치해주세요. pracExpress.md를 읽어보세요"; \
		exit 1; \
	else \
		echo "database.db 파일이 존재합니다. 'make start'를 해도 됩니다."; \
	fi

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

re: down start