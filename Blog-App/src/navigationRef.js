import { NavigationActions } from 'react-navigation';

export const setNavigator = nav => {
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
    })
  );
};
