# Code Differently-24Q4Team4 Capstone Project(Kanban board)

### Members: Chigazo Graham, Shawn Dustmore Jr., Tommy Tran, and Zion Buchanan

## Introduction

For the next two weeks(Dec 2nd - Dec 14th), our team will ideate and implement a working software system. We will have the opportunity to apply the skills that we have learned to solve an interesting problem or contribute a meaningful tool that improves our lives.

Development will be conducted in Visual Studio Code, utilizing TypeScript Execute with the Next.js framework. Git and GitHub will be used for version control to ensure efficient team collaboration, and Vercel will be employed for deployment. The project will follow the full development lifecycle, from ideation to implementation, while prioritizing best practices in software design and development. Our final submission will deliver the functionality outlined in our user stories, which can be found in the 'Issues' tab, guiding our development process and ensuring we meet the project requirements effectively.

---
![6d05c0b7-5d99-45ed-9b51-b95f1e3852b7](https://github.com/user-attachments/assets/b086614a-d33c-4ddb-ad8d-fe615ec2fa89)
***

## Our App

Inefficient workflow management frequently leads to confusion, miscommunication, and project delays within teams. When tasks are scattered across multiple platforms or inadequately organized, it becomes hard to see what needs to be done and who is responsible for each task. This creates an environment ripe for bottlenecks, situations where the workflow is restricted or slowed down, causing delays and negative effects to the team's overall efficiency. Therefore, having a clear and organized workflow management system is crucial for improving teamwork and ensuring projects are finished on time.

Our Kanban app is a powerful task management tool designed to streamline workflows and boost productivity. With an intuitive interface, users can organize tasks into customizable columns that represent project stages such as To Do, In Progress, and Completed. Each task card includes key details like title, description, and due dates. Ideal for individuals, the app combines simplicity and flexibility to ensure effective project management.

## Demo

Check out the live demo of the Kanban app hosted on Vercel: *[https://24q4-team4-git-fork-code-differently-edaa75-txtran224s-projects.vercel.app]*

#### Local Installation Instructions

To run the Kanban app locally, follow these steps:

1. Clone the repository:

    > git clone https://github.com/code-differently/24q4-team4.git

2. Navigate to the project directory:

    > cd capstone-project

3. Install dependencies:

    > npm install -g pnpm
    > pnpm install

4. Download and Install PostgreSQL:
   (macOS: Use Homebrew)
   
   > brew install postgresql
   
   > brew services start postgresql
   
   > psql postgres
   
   > CREATE USER myuser WITH PASSWORD 'mypassword';
   
   > CREATE DATABASE mydatabase;
   
   > GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser
   
5. Update .env with your credentials:

    - DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydatabase"

    - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZmFzdC1raXQtNzMuY2xlcmsuYWNjb3VudHMuZGV2JA
    - CLERK_SECRET_KEY=sk_test_pOGv551ImSLVwAnwLU7q0HLC8AmqhvU7irXAE8OJHd
  
6. Set Up the Database:
    
    > brew services start postgresql
    > createdb DATABASE_NAME
    > pnpm prisma migrate dev --name init
    > pnpm prisma generate

7. Start the development server:

    > pnpm run dev

8. Open the app in your browser at [http://localhost:3000].

## Issues and Improvements

#### Know Issues

- Limited mobile optimization for smaller screens.
- Sign-in button remains after being signed-in.
- Calendar clips out of the bottom view of the screen when in full screen mode.

#### How To Improve

- Directory to open previously saved Kanban Boards.
- A way for groups and teams to utilize a single board.
- A feature in order to tag tasks.
- A page to customize each board.
- A way to edit existing tasks.
- Integration with third-party apps.
- Analytics to provide insights and progress tracking for productivity improvement.

## Roadmap features

- Interactive Kanban Page: Display columns with associated tasks with real-time updates when tasks are added, removed, or moved.
- Add/Remove Task Button: A button to add a new task or remove an existing task.
- Drag-and-Drop Support: Enable seamless task movement between columns.
- Dark Mode: Provide a toggle for a dark theme interface.
- User Authentication: Allow multiple users to securely access their projects.

## Credits

- Animations: Created using Rive
- Authenticator API: Implemented using Clerk.
- Database Management API: Powered by Prisma.
- Deployment: Hosted on Vercel.
- Framework: Built with Next.js, styled with Tailwind CSS, and written in TypeScript.

## Project Requirements

-  All work must be submitted in our team's assigned GitHub repository.
-  The assignment can be completed in **ANY** language.
-  Must have a working front-end that interacts with a back-end web service to retrieve and persist data.
-  App must be publicly accessible. It is recommended that we use Vercel or Fly.io to deploy apps.
-  The system must incorporate one third-party API.
-  Write unit tests achieving **70% code coverage** (using JaCoCo for Java or Jest for Typescript).
-  Must include an integration test for each user story that demonstrates how our code implements the desired feature.
-  Each team member must contribute at least **two** submitted pull request containing working code and tests.
-  Repo must include a README with the following elements:
    - The team
    - Screenshot
    - A description of the app
    - Demo link
    - Installation instructions
    - Known issues
    - Roadmap features
    - Credits
- [Tip] It is **HIGHLY** recommended that you maintain a clean Main branch and only merge changes via pull requests (we've been using squashed merges for the main repo to simplify commit history). Don't forget to use Conventional Commits.

## Presentation

* Initial Presentation link [https://docs.google.com/presentation/d/1rbupDNUv-u6F1CKVs5p0R1RogUaK7eGBQm5GpqV72L4/edit?usp=sharing]
* New & Improved Presentation [https://docs.google.com/presentation/d/1L5FQuxYEwlzHy1LpwnVJ6HLb4Yd3VOM80uvrVEV6JB8/edit#slide=id.g31e60e9368d_0_44]
