import { Outlet, Route, Routes as ReactRouterRoutes, useLocation, useNavigate } from "react-router-dom";
import { Prospection } from "../pages/SolarEnergy/pages/Manager/Prospection";
import { Box } from "@chakra-ui/react";
import { Profile } from "../pages/SolarEnergy/pages/Manager/Profile";
import { MyPlan } from "../pages/SolarEnergy/pages/Manager/MyPlan";
import { SavedModelsPage } from "../pages/SolarEnergy/pages/Manager/SavedModelsPage";
import { useEffect } from "react";

export function Routes() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (['/'].includes(location.pathname)) {
      navigate('/profile');
    }
  }, [location.pathname, navigate]);

  return (
    <ReactRouterRoutes>

      <Route path="/" element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/prospection" element={<Prospection />} />
        <Route path="/myplan" element={<MyPlan />} />
        <Route path="/saved" element={<SavedModelsPage />} />
      </Route>

    </ReactRouterRoutes>
  );
}

function Layout() {

  return (
    <Box as="main" w="100vw" h="100vh" overflow="hidden">
      <Outlet />
    </Box>
  );
}