import {
  Image as RN_Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";

interface Props {
  src: ImageSourcePropType;
  alt: string;
  style?: {};
  onPress?: (any?: any) => any;
  tintColor?: string;
}

const Image = ({ src, alt, style, onPress, tintColor }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <RN_Image
        source={src}
        alt={alt}
        style={style}
        resizeMode="contain"
        tintColor={tintColor}
      />
    </Pressable>
  );
};

export default Image;
