import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Text, useColorModeValue, HStack, IconButton, useToast, useDisclosure, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from "../store/product";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct, updateProduct } = useProductStore();

    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = async(pid) => {
        const {success, message} = await deleteProduct(pid);
        toast({
            title: success== true ? "Deletion Success" : "Deletion Faliure",
            description: message,
            status: success==true ? "success" : "error"
        });
    };

    
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const handleUpdate = async(pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
        toast({
            title: success== true ? "Udpate Success" : "Update Failure",
            status: success==true ? "success" : "error"
        });
        onClose();
    };

  return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
        <Box p={4}>
            <HStack justifyContent={"space-between"}>
                <Heading as={'h3'} size={'md'} mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                    $ {product.price}
                </Text>
            </HStack>
            
            <HStack spacing={2}>
                <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                <IconButton
                    icon={<DeleteIcon />}
                    onClick={() => handleDelete(product._id)}
                    colorScheme='red'
                />
            </HStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Update Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack spacing={2}>
                    <Input
                        placeholder='Product Name'
                        name='productName'
                        value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                    />
                    <Input
                        placeholder='Price'
                        name='productPrice'
                        value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                    />

                    <Input
                        placeholder='Image URI'
                        name='productImageUri'
                        value={updatedProduct.image}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                    />
                </VStack>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => handleUpdate(product._id, updatedProduct)}>
                    Update
                </Button>
                <Button variant='ghost' onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  );
}

export default ProductCard
