# NUS SoC CS5224 Cloud Computing Course Project

## Overview
### Personality Hacker - An Web Application Help To Pick Ideal Candidates Based on Personality Insight 

Source Code on Github: https://github.com/qnlzgl/CS5224-PIA 

Demo on AWS S3 Bucket: http://cs5224-personal-insight-bucket.s3-website.ap-southeast-1.amazonaws.com

## Group Members
HAN, BING       A0186003N

XU YIMING       A0133972B

ZHAO GUANLUN    A0194922X 

WANG YUANHONG   A0136022M

## Project Summary
Different job positions usually require different personality traits, but it would be time-consuming and even infeasible for HR to manually assess the personality of many applicants. Thus, an automated application should be developed to mitigate the conflict between recruitment expectation and HR capability. In our project, we propose an innovative service, Personality Hacker, to obtain the applicants’ personality traits and rank them accordingly from the textual data available for the candidates. Based on IBM personality insight service, we provide SaaS service that achieve individual personality analysis and candidates ranking for assessors of HR departments and school’s admission office.

## Project Objective
The key objective of this application is to make recruitment process automatic and efficient. To provide refined and comprehensive quality services, we also consider the following functions or capacities.
- Make users access the service easily from a web browser and use without any technical skills.
- Infer personality traits from textual data pertaining to personal statement or cover letter and then visualize the results.
- Take personality traits into account in ranking process and export the results easily. 
- Ensure the scalability and availability of this application to accommodate diverse user demands. 

## Get Started

```bash
$ git clone https://github.com/qnlzgl/CS5224-PIA.git
$ cd CS5224-PIA
$ npm install
$ npm start
```

Please open `http://localhost:3000` to see the results. 

## Development

All app code is in `src/`. The app is written in [react](https://facebook.github.io/react/)
and during development time, simply run `$ npm start` to start a dev server.

## Build frontend app

Make sure to build the app into production before deployment. Optimised HTML, CSS, Javascript will be generated in `build` folder

`$ npm run build`

## Deploy

This project is deployed on AWS S3 Bucket thus AWS CLI is required for S3 Bucket deployment.

`aws s3 sync build/ s3://cs5224-personal-insight-bucket`

An AWS account is required and IAM account should be given the right to read and write objects in AWS S3 Bucket.

Please follow the tutorial below on how to deploy React App on AWS S3 Bucket
https://medium.com/@serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6
