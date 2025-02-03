import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type: 'title' | 'subtitle' | 'text';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'title',
  ...rest
}: ThemedTextProps) {
  const theme = useThemeColor();

  return (
    <Text
      style={[
        type === 'text' ? [styles.text,{color:theme.text}] : undefined,
        type === 'title' ? [styles.title,{color:theme.title}] : undefined,
        type === 'subtitle' ? [styles.subtitle,{color:theme.subtitle}] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 17,
    lineHeight:25,
    fontWeight: 'bold',
  },
});
