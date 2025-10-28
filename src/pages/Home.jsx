import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardBody } from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to PLP Task Manager</CardTitle>
        </CardHeader>
        <CardBody>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            A simple yet powerful task management application built with React and Tailwind CSS.
            Get started by adding your first task or explore the features below.
          </p>
          <div className="flex gap-4 mt-6">
            <Button as={Link} to="/tasks" variant="primary">
              View Tasks
            </Button>
            <Button as={Link} to="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Add, edit, and delete tasks</li>
              <li>Mark tasks as complete</li>
              <li>Filter tasks by status</li>
              <li>Dark/Light mode support</li>
              <li>Responsive design</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardBody className="space-y-3">
            <Button as={Link} to="/tasks/new" variant="primary" className="w-full">
              Add New Task
            </Button>
            <Button as={Link} to="/tasks" variant="secondary" className="w-full">
              View All Tasks
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Home;
