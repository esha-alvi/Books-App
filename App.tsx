import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

interface Book {
    id: number;
    title: string;
    author: string;
    price: number; 
}

const initialBooks: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 15 },
    { id: 3, title: '1984', author: 'George Orwell', price: 20 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 12 },
];

const App = () => {
    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [cart, setCart] = useState<Book[]>([]);

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addToCart = (book: Book) => {
        if (!cart.find(item => item.id === book.id)) {
            setCart([...cart, book]);
        }
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter(book => book.id !== id));
    };

    const totalPrice = cart.reduce((total, book) => total + book.price, 0);

    const renderBookItem = ({ item }: { item: Book }) => {
        console.log('Rendering Book Item:', item); 
        return (
            <View style={styles.bookContainer}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
                <Text style={styles.bookPrice}>Price: ${item.price}</Text> 
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderCartItem = ({ item }: { item: Book }) => {
      console.log('Rendering Cart Item:', item); 
      return (
          <View style={styles.cartItemContainer}>
              <Text style={styles.cartItemText}>{item.title} - ${item.price}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
          </View>
      );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Books List</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search for a book..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />
            <FlatList
                data={filteredBooks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderBookItem}
                style={styles.list}
                ListEmptyComponent={<Text style={styles.emptyText}>No books found.</Text>}
            />
            <View style={styles.cartContainer}>
                <Text style={styles.cartTitle}>Cart</Text>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCartItem}
                    ListEmptyComponent={<Text style={styles.emptyText}>No items in the cart.</Text>}
                />
                <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#371949',
    },
    searchInput: {
        borderColor: '#6A1B9A',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    list: {
        flex: 1,
    },
    bookContainer: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#e1bee7',
        marginBottom: 10,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    bookAuthor: {
        fontSize: 16,
        color: 'black',
    },
    bookPrice: {
        fontSize: 16,
        color: 'black',
    },
    addButton: {
        backgroundColor: '#371949',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    emptyText: {
        textAlign: 'center',
        color: '#6A1B9A',
        marginTop: 20,
    },
    cartContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#e1bee7',
        borderRadius: 5,
    },
    cartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black',
    },
    cartItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    cartItemText: {
        fontSize: 16,
        color: 'black',
    },
    removeButton: {
        backgroundColor: '#371949',
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        color: 'black',
    },
});

export default App;
