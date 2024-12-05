import React from 'react';
import { BookOpen, Code, MessageSquare, Trophy, Users } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-gray-50">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1">
            <a className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <Code className="text-gray-500 mr-3 h-6 w-6" />
              Problems
            </a>
            <a className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <Trophy className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" />
              Contest
            </a>
            <a className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <BookOpen className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" />
              Learn
            </a>
            <a className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <MessageSquare className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" />
              Discuss
            </a>
            <a className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <Users className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" />
              Interview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}