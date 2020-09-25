import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { colors } from '../../styles';

export const StyledFlatList: new <T>() => FlatList<T> = styled(FlatList).attrs(
  (): Partial<FlatListProps<unknown>> => ({
    contentContainerStyle: {
      flexGrow: 1,
    },
    showsVerticalScrollIndicator: false,
  }),
)`` as any;

export const EmptyContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: ${colors.inactive};
  font-style: italic;
  text-align: center;
  text-align-vertical: center;
`;
