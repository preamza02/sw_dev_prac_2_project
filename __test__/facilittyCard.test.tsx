import { render, screen } from '@testing-library/react';
import FacilityCard from '@/app/(main)/_components/facililtyCard';
import '@testing-library/jest-dom';

describe('FacilityCard Component', () => {
    it('renders correctly with a string-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage="/test-image.jpg"
        />
        );

        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders correctly with a ReactNode-based facilityImage', () => {
        render(
        <FacilityCard
            facilityTitle="Test Facility"
            facilityImage={<img src="/test-image.jpg" alt="Test Facility" />}
        />
        );
    
        // Check that the title is rendered
        const titleElement = screen.getByText('Test Facility');
        expect(titleElement).toBeInTheDocument();
    });
});