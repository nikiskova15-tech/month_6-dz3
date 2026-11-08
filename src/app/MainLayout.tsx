import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../widgets/Header'
import Loader from '../shared/Loader'
import Footer from '../widgets/Footer'

export default function MainLayout() {
  const navigation = useNavigation()

  return (
    <div>

      <Header />

      {navigation.state === 'loading' && <Loader />}

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}