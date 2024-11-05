import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style'; 

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
    const [cart, setCart] = useState<Book[]>([]);

    const addToCart = (book: Book) => {
        if (!cart.find(item => item.id === book.id)) {
            setCart([...cart, book]);
        }
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter(book => book.id !== id));
    };

    const totalPrice = cart.reduce((total, book) => total + book.price, 0);

    const renderBookItem = ({ item }: { item: Book }) => (
        <View style={styles.bookContainer}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <Text style={styles.bookPrice}>Price: ${item.price}</Text> 
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    const renderCartItem = ({ item }: { item: Book }) => (
        <View style={styles.cartItemContainer}>
            <Text style={styles.cartItemText}>{item.title} - ${item.price}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Books List</Text>
            <FlatList
                data={initialBooks}
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

export default App;
