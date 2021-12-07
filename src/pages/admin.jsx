import AdminPage from "../screens/Admin/AdminPage";

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3001/cats")
    const cats = await res.json()
    console.log(cats)
    return {
        props: { cats }
    }
}

export default AdminPage;
