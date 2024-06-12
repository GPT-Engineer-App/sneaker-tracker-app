import { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ date: "", amount: "", type: "", category: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTransactions = transactions.map((transaction, index) => (index === editIndex ? form : transaction));
      setTransactions(updatedTransactions);
      setEditIndex(null);
    } else {
      setTransactions([...transactions, form]);
    }
    setForm({ date: "", amount: "", type: "", category: "" });
  };

  const handleEdit = (index) => {
    setForm(transactions[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Flex mb={4}>
          <FormControl mr={4}>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={form.date} onChange={handleChange} required />
          </FormControl>
          <FormControl mr={4}>
            <FormLabel>Amount</FormLabel>
            <Input type="number" name="amount" value={form.amount} onChange={handleChange} required />
          </FormControl>
          <FormControl mr={4}>
            <FormLabel>Type</FormLabel>
            <Select name="type" value={form.type} onChange={handleChange} required>
              <option value="">Select type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select name="category" value={form.category} onChange={handleChange} required>
              <option value="">Select brand</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
            </Select>
          </FormControl>
        </Flex>
        <Button type="submit" colorScheme="blue" mr={4}>
          {editIndex !== null ? "Update" : "Add"} Transaction
        </Button>
      </form>
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction, index) => (
            <Tr key={index}>
              <Td>{transaction.date}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.type}</Td>
              <Td>{transaction.category}</Td>
              <Td>
                <Button size="sm" mr={2} onClick={() => handleEdit(index)}>
                  <FaEdit />
                </Button>
                <Button size="sm" colorScheme="red" onClick={() => handleDelete(index)}>
                  <FaTrash />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Transactions;