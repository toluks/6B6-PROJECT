import Category from './components/Category'
import MainPage from './components/MainPage'
import RecentAdd from './recipes/RecentAdd'


export default function Home() {
  return (
    <main>
      <MainPage />

      <Category />

      <RecentAdd/>
    </main>
  )
}