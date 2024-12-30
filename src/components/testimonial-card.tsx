import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import Image from "next/image";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Image width={400} height={200}  src={img} className="mb-4" alt={client}  />
       
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;