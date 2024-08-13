import { StackNavigation } from "@/navigation";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
