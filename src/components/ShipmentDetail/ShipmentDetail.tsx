import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const ShipmentDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Drawer Header</DrawerHeader>
          <DrawerBody>
            <div>This is the content of the drawer.</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
