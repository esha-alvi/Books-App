import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        color: '#6A1B9A'
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
