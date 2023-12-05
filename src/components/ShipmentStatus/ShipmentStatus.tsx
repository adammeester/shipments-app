import { Text, Card, CardBody, useColorModeValue } from "@chakra-ui/react";
import { ShipmentStatusType } from "../types";

type ShipmentStatusProps = {
  status: ShipmentStatusType;
};
const colorMapping = {
  Delivered: "green",
  "In-Transit": "orange",
  Manifested: "blue",
  Unknown: "gray",
};

export const ShipmentStatus = ({ status }: ShipmentStatusProps) => {
  const color = useColorModeValue(
    colorMapping[status],
    `${colorMapping[status]}.dark`
  );
  const borderColor = useColorModeValue(
    colorMapping[status],
    `${colorMapping[status]}.dark`
  );

  return (
    <Card color={color} border={`1px solid ${borderColor}`} maxWidth={"6rem"}>
      <CardBody display={"flex"} justifyContent={"center"} padding={"0.5rem"}>
        <Text fontWeight={500} fontSize={"0.875rem"}>
          {status}
        </Text>
      </CardBody>
    </Card>
  );
};
