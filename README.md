# spring-react
Boilerplate code for starting a project with Spring boot, ReactJS, H2 file based.

- **React** 19.1.0
- **Typescript** 5.8.3
- **Spring boot** 3.5.0
- **Java** 24
- **H2** that comes with spring

# Architecture

```mermaid
graph TD
    E <--> |"JPA"| F[H2 DB file mode]
    A --> |"npm run build"| H
    subgraph Backend
        H[Static Resources] --> B
        B <--> C[Controller]
        C <--> D[Service]
        D <--> E[Repository]
    end
    subgraph Frontend
        A[Vite + React + TS] <-->|"HTTP (fetch)"| B[Spring Boot]
    end
```


### Screenshot

![Screenshot](/frontend/public/screenshot1.png)
