import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

declare global {
  export type SignInStackParamList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
  }


  export type SignInStackNavigatorProp = StackNavigationProp<SignInStackParamList, 'access'>;

  // useRoute types
  // export type StoriesHomeStackRouteProps = RouteProp<SignInStackParamList, 'access'>;
}
