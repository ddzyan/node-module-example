from locust import HttpLocust, TaskSet, task

class koaHttp(TaskSet):
    @task(1)
    def index(self):
        self.client.get("/")

class WebsiteUser(HttpLocust):
    weight = 1
    task_set = koaHttp
    min_wait = 5000
    max_wait = 9000
    host=http://localhost:3000
