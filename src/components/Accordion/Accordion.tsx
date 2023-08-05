import { ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import joinClasses from '../../utils/joinClasses';

interface IAccordionP {
  title?: string;
  content?: string | ReactNode;
}

function Accordion({ title = '', content }: IAccordionP) {
  return (
    <Disclosure as="div" className="px-4 py-2">
      {({ open }) => (
        <>
          <h3>
            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
              <span className={joinClasses(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}>
                {title}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                ) : (
                  <PlusIcon className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel as="div" className="prose prose-sm pb-6">
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Accordion;
