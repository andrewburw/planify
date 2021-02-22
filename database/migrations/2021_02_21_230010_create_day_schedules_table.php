<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDaySchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('day_schedules', function (Blueprint $table) {
            $table->id();
            $table->string('start');
            $table->string('end');
            $table->string('day');  // day of year
            $table->string('name');
            $table->string('month'); // month number
            $table->unsignedBigInteger('calendar_id');
            $table->foreign('calendar_id')
                    ->references('id')
                    ->on('calendars')
                    ->onDelete('cascade');  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('day_schedules');
    }
}
