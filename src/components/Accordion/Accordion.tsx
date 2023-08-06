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
    <Disclosure as="div" className="px-6 py-2">
      {({ open }) => (
        <>
          <h3>
            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
              <span
                className={joinClasses(
                  open ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-zinc-200',
                  'text-sm font-medium'
                )}
              >
                {title}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="block h-6 w-6 text-red-400 group-hover:text-red-500" aria-hidden="true" />
                ) : (
                  <PlusIcon
                    className="block h-6 w-6 text-gray-400 dark:text-zinc-200 group-hover:text-gray-500 dark:group-hover:text-zinc-300"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel as="div" className="prose prose-sm pb-6 dark:text-zinc-200">
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Accordion;
