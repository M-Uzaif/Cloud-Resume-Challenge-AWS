# Cloud Resume Challenge

Welcome to my **Cloud Resume Challenge** project!\
This is a hands-on implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), showcasing a static resume website hosted entirely on AWS, integrated with modern cloud services, serverless architecture, and CI/CD practices.

---

##  Project Overview

This project demonstrates my skills in both **cloud computing** and **web development** by building and deploying a static website resume using AWS services. The website features a visitor counter powered by serverless backend technologies.

---

##  What's in the Project?

###  Frontend - Static Website

- `index.html` – Resume content
- `styles.css` – Website styling
- `script.js` – JavaScript logic for the visitor counter

###  AWS Services Used

| Service         | Purpose                                                 |
| --------------- | ------------------------------------------------------- |
| **S3**          | Hosts the static website files                          |
| **CloudFront**  | Enables HTTPS, CDN caching, and global content delivery |
| **Lambda**      | Executes backend logic for visitor counter              |
| **API Gateway** | Creates RESTful API to connect frontend with backend    |
| **DynamoDB**    | NoSQL database to store and retrieve visitor count      |

###  CI/CD Pipeline

- **GitHub Actions**: Automates deployment of website files to the S3 bucket.

---

##  What I Learned

This project gave me real-world experience with modern cloud technologies and development practices:

- **Cloud Services**: Learned how to use AWS services like S3, CloudFront, Lambda, API Gateway, and DynamoDB.
- **Static Website Hosting**: Hosted a secure, scalable website using S3 and CloudFront.
- **Serverless Computing**: Implemented backend logic using AWS Lambda.
- **Database Management**: Used DynamoDB to store website visitor counts.
- **API Development**: Built a RESTful API using API Gateway and integrated it with frontend JavaScript.
- **CI/CD Practices**: Created a GitHub Actions workflow to automate deployments.
- **Frontend Development**: Improved my HTML, CSS, and JavaScript skills.
- **Version Control**: Used Git and GitHub for source control and collaboration.
- **Security Best Practices**: Learned to manage AWS credentials and enforce HTTPS securely.
- **Cloud Cost Management**: Optimized usage within AWS Free Tier to manage costs effectively.

---


##  Inspiration

The Cloud Resume Challenge is designed to give developers practical experience with cloud and DevOps technologies. It’s a great starting point for anyone beginning their cloud journey.

---

## Feedback & Contributions

Feel free to open issues or pull requests if you'd like to contribute or suggest improvements!

---

##  License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

