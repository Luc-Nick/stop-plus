import Link from 'next/link';
import React from 'react';

export default function HomeBtn() {
    return (
        <Link href="/">
          <button className="btn btn-soft btn-info absolute top-4 left-4">
            Home
          </button>
        </Link>
    );
}