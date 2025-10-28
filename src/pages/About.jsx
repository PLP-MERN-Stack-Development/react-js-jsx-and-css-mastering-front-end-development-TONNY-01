import { Card, CardHeader, CardTitle, CardBody } from '../components/Card';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>About PLP Task Manager</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              PLP Task Manager is a modern, responsive task management application built with React and Tailwind CSS.
              It helps you organize your tasks, stay productive, and manage your daily activities efficiently.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create, edit, and delete tasks</li>
              <li>Mark tasks as complete</li>
              <li>Filter tasks by status (All, Active, Completed)</li>
              <li>Responsive design that works on all devices</li>
              <li>Dark/Light mode support</li>
              <li>Persistent storage using localStorage</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">Technologies Used</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold">Frontend</h3>
                <ul className="mt-2 space-y-1">
                  <li>React 18</li>
                  <li>React Router</li>
                  <li>Tailwind CSS</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold">Features</h3>
                <ul className="mt-2 space-y-1">
                  <li>Hooks (useState, useEffect, useContext)</li>
                  <li>Custom Hooks</li>
                  <li>Context API</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Get Started</h2>
              <p className="mb-4">
                Ready to boost your productivity? Start managing your tasks today!
              </p>
              <Button as="a" href="/tasks" variant="primary">
                Go to Tasks
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
