import { render } from "@testing-library/react";
import { store } from "app/providers/store";
import { StateSchema } from "app/providers/store/types";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

export interface componentRenderOptions {
  route?: string;
  intialState?: StateSchema;
}

export function componentRender(
  components: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = "/", intialState } = options;
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{components}</MemoryRouter>
    </Provider>
  );
}
