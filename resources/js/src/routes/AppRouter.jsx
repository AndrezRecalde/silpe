import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages/Errores/NotFound'
import { HomePage } from '../pages/Home/HomePage'
import { PasantiaPage } from '../pages/Pasantia/PasantiaPage'
import { BusquedaPage } from '../pages/Tramite/BusquedaPage'
import { SendTramitePage } from '../pages/Tramite/SendTramitePage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/tramite/busqueda" element={<BusquedaPage />} />
        <Route path="/tramite/solicitud" element={<SendTramitePage />} />

        <Route path="/tramite/pasantias" element={<PasantiaPage />} />


        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
