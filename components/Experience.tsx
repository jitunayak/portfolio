import Image from "next/image";
import aws from "./../images/aws.png";
import javascript from "./../images/javascript.png";
import lambda from "./../images/lambda.png";
import nodejs from "./../images/nodejs.png";
import reactjs from "./../images/reactjs.jpg";
import react2 from "./../images/reactjs2.webp";
import techstack_banner from "./../images/techstack_banner.png";
import ts from "./../images/ts.jpg";
export default function Experience() {
  const listOfTechnologies = [
    ts,
    lambda,
    nodejs,
    react2,
    javascript,
    reactjs,
    aws,
  ];
  return (
    <div className="mt-20  p-10">
      <Image src={techstack_banner} alt="banner" />
      {/* <div className=" mt-10 text-2xl font-semibold ">
        4 years of Experience
      </div> */}
      <div className="mt-10 bg-gradient-to-tl from-pink-500 to-violet-500 bg-clip-text text-3xl font-semibold text-transparent">
        4 years of Experience
      </div>
      <div className="text-xl font-medium">Software Developer</div>
      <div className="my-4 gap-2 rounded-md bg-gray-800  bg-clip-content font-medium text-slate-100  shadow-slate-500 ring-0 ring-slate-600 backdrop-filter">
        <div className="p-6">
          <li>
            Designed and developed highly scalable backend solutions to handle
            Logistics of Koch Ag and Energy solutions.
          </li>
          <br></br>
          <li>
            Improving functional technical and architectural designs and
            proactively share knowledge on potential improvements to
            business/technical processes.
          </li>
          <br></br>
          <li>
            Experienced in developing TypeScript/JavaScript based applications
            using Serverless Framework, AWS Step Functions, AWS Event Bridge,
            AWS Lambda, DynamoDB, API Gateway, SQS, CloudFormation, React JS
          </li>
          <br></br>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap sm:w-1/3">
        {listOfTechnologies.map((item, index) => {
          return (
            <div className="m-2" key={index}>
              <Image
                className="rounded object-cover hover:animate-ping "
                src={item}
                key={index}
                alt="image"
                width={80}
                height={80}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
