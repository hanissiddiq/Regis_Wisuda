<?php

namespace App\Filament\Resources\GraduationFees\Pages;

use App\Filament\Resources\GraduationFees\GraduationFeeResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListGraduationFees extends ListRecords
{
    protected static string $resource = GraduationFeeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
