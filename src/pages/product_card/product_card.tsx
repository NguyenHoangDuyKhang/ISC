import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface ExpandedState {
  [key: number]: boolean;
}

const ProductCard = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      image:
        'https://i.pinimg.com/736x/ee/3e/88/ee3e88df2b236e848a1beef8fe7b3703.jpg',
      description:
        'Đây là mô tả dài cho sản phẩm 1. Sản phẩm chất lượng cao, bền, đẹp và phù hợp với nhu cầu của bạn. Chúng tôi đảm bảo bạn sẽ hài lòng khi sử dụng sản phẩm này.',
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      image:
        'https://i.pinimg.com/736x/ee/3e/88/ee3e88df2b236e848a1beef8fe7b3703.jpg',
      description:
        'Mô tả dài cho sản phẩm 2. Thiết kế đẹp, bền và tiện dụng. Thích hợp cho nhiều mục đích sử dụng khác nhau.',
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      image:
        'https://i.pinimg.com/736x/ee/3e/88/ee3e88df2b236e848a1beef8fe7b3703.jpg',
      description:
        'Sản phẩm 3 là lựa chọn hoàn hảo cho mọi gia đình với giá cả hợp lý và chất lượng tuyệt vời.',
    },
    {
      id: 4,
      name: 'Sản phẩm 4',
      image:
        'https://i.pinimg.com/736x/ee/3e/88/ee3e88df2b236e848a1beef8fe7b3703.jpg',
      description:
        'Mô tả dài sản phẩm 4: Đáp ứng tốt nhu cầu sử dụng hàng ngày và đảm bảo sự hài lòng của bạn.',
    },
  ];

  const [expanded, setExpanded] = useState<ExpandedState>({});

  const handleToggleDescription = (id: number) => {
    setExpanded(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderDescription = (description: string, isExpanded: boolean) => {
    const maxWords = 20; // Số từ tối đa hiển thị trong mô tả ngắn
    const words = description.split(' ');

    if (isExpanded || words.length <= maxWords) {
      return description;
    } else {
      return words.slice(0, maxWords).join(' ') + '...';
    }
  };

  return (
    <View>
      {products.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={{uri: item.image}} style={styles.productImage} />
          <View style={styles.cardContent}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>
              {renderDescription(item.description, expanded[item.id] || false)}
            </Text>
            <TouchableOpacity onPress={() => handleToggleDescription(item.id)}>
              <Text style={styles.toggleButton}>
                {expanded[item.id] ? 'Ẩn bớt' : 'Xem thêm'}
              </Text>
            </TouchableOpacity>
            <Button
              title="Thêm vào giỏ hàng"
              onPress={() => Alert.alert(`Đã thêm ${item.name} vào giỏ hàng!`)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  toggleButton: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});

export default ProductCard;
