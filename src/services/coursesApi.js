
export const getAllCourses = async () => {

    const data = await fetch('/courses.json');
    return await data.json();

}
