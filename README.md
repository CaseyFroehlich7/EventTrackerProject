# EventTrackerProject

### Project Description:

The task for the first part of the EventTrackerProject was to produce a concept that could be tracked and all CRUD functions could be applied to it as well. As a previous carpenter, I wanted to create an application where I could track all of the details and photos from previous projects and future projects as well. Using MySqlWorkbench, I created a database schema model where I currently have implemented one table with multiple columns but plan to add additional tables in the future.

I then created a JPA Project, an entity class that models the database table, and successfully mapped the POJO using JPA. The next step was to configure a Spring Boot Application to publish a REST API using REST annotations and Spring Data JPA to perform all CRUD operations. Lastly, I tested all routes using Postman and deployed the project to my EC2 instance. To complete this project, a front-end was added using Angular. I created services, models, and components for my entities. This project allows a user to perform full CRUD. I look forward to coming back to this project to add more styling.



AWS: http://52.5.120.254:8080/MyBuilds/api/carpentryprojects

### Expected Routes:

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/carpentryprojects`    |              | JSON of `List<CarpentryProjects>` |
| GET       | `/api/carpentryprojects/{id}` |              | JSON of `CarpentryProjects` {id} |
| POST      | `/api/carpentryprojects`    | JSON of a new `CarpentryProjects` | JSON of created `CarpentryProjects` |
| PUT       | `/api/carpentryprojects/16` | JSON of a new version of `CarpentryProjects` 16 | JSON of updated `CarpentryProjects` |
| DELETE    | `/api/carpentryprojects/16` |              | |

### Technologies Used:
<ul>
<li>Java</li>
<li>REST</li>
<li>SpringBoot</li>
<li>Hibernate</li>
<li>MySQL</li>
<li>Gradle</li>
<li>Git</li>
<li>Spring Data JPA</li>
<li>Spring Tool Suite</li>
<li>Postman</li>
<li>AWS</li>

</ul>

### Lessons Learned:

This was a great project to solo dive into after spending the past few weeks on a team as we completed our midterm project. In a paired programming environment, you may not be 100% hands on as you drive/navigate with your partner(s). The EventTrackerProject has given me the opportunity to better familiarize myself with creating a database and an EER diagram using MySqlWorkbench, mappings, and testing using Postman. One issue that I overcame during this weekends project was a date format error. After some googling, I found the appropriate JSON annotation that I needed to add (@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss") and every thing was working as intended.
