import { getAllCourses } from './coursesApi';

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('getAllCourses', () => {
  it('should fetch courses and return parsed JSON', async () => {
    const mockData = { courses: [{ id: 1, name: 'Test Course' }] };
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await getAllCourses();

    expect(global.fetch).toHaveBeenCalledWith('/courses.json');
    expect(result).toEqual(mockData);
  });

  it('should propagate fetch errors', async () => {
    global.fetch.mockRejectedValue(new Error('Network error'));

    await expect(getAllCourses()).rejects.toThrow('Network error');
  });

  it('should propagate JSON parse errors', async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
    });

    await expect(getAllCourses()).rejects.toThrow('Invalid JSON');
  });
});
