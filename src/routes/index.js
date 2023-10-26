import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Books from '../Pages/Books';
import Posts from '../Pages/Posts';
import Date from '../Pages/Date';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to='/posts' replace />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/books" element={<Books />} />
                <Route path='/date' element={<Date />} />
            </Routes>
        </BrowserRouter>
    );
}
